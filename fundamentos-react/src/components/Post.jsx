import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useState } from 'react';

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";


export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Post legal'
  ])

  const [newCommentText, setNewCommentText] = useState('') // Text Area

 // DATA
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true 
  })
  // Criar novo comentario
  function handleCreateNewComment(event) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }
  // Digitação de comentario
  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }
  // Alterar o texto do required
  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Ta maluco rapaz, escreve algo ae po!')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }
  // Se o textarea de comentario estiver vazia
  const isNewCommentEmpty = newCommentText.length === 0

  return (
    // Cabeçalho
    <article className={styles.post}>
      <header> 
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.author_info}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      {/* Conteudo do post */}
      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p> 
          } else if (line.type === 'link') {
            return <p key={line.content}><a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.comment_form}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name='comment'
          value={newCommentText}
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.comment_list}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  );
}
